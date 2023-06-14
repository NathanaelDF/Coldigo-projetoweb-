package br.com.gcontato.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AdicionaContatoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AdicionaContatoServlet() {
		super();
	}

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	PrintWriter out = response.getWriter();
		String contato = "Nome: "; 
		contato += request.getParameter("nome");
		contato += "\n";
		contato += "Endereço: ";
		contato += request.getParameter("endereco");
		contato += "\n";
		contato += "Telefone: ";
		contato += request.getParameter("telefone");
		out.println(contato);
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse respons) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse respons) throws ServletException, IOException {
	}
}


